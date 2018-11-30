
//libreria para display
#include <LiquidCrystal_I2C.h>
#include <Servo.h>

// LibrerÃ­a para la comunicaciÃ³n I2C y la RTClib
#include <Wire.h>
#include <RTClib.h>

// Declaramos un RTC DS3231
RTC_DS3231 rtc;
LiquidCrystal_I2C lcd(0x3F,16,2);
Servo myservo;  // crea el objeto servo

int modo = 7;
int seleccion = 1;
int opcion = 0;
int led = 6;
int horaA = 0;
int minA = 0;
int setHora = 5;
int setMinu = 4;
int horaR = 0;
int minuR = 0;
int seguA = 0;
int seguR=0;
int BUZZER =8;
int flag=0;
int flagA=0;
int i;
int suenaAlarma = 1;
int opcionAlarma = 10;


 void moverServo(){
  //myservo.attach(12);  // vincula el servo al pin digital 3
  myservo.write(90);
  delay(1500);
  myservo.write(0);
  //myservo.detach();
 }

void ajustarAlarma(){
  lcd.clear();
  lcd.print("Ajustando Alarma");
  lcd.setCursor(0,1);
  lcd.print(horaA);
  lcd.print(":");
  lcd.print(minA);
  lcd.print(":");
    lcd.print(seguA);

  }
void opcion3(){
  lcd.clear();
  lcd.print("Tercera Opcion");
  }

  void checkAlarma(){
    if(horaR==horaA && minuR==minA && suenaAlarma==1){
        lcd.clear();
        lcd.print("SONANDO ALARMA");
        digitalWrite(BUZZER, i);
        delay(50);
        digitalWrite(BUZZER, 50);
        delay(50);    
        if(flagA==0){
          moverServo();
          flagA=1;
          }
          
      }
      if(suenaAlarma==0){
        digitalWrite(BUZZER,LOW);
        flagA=0;
        }
    }
void mostrarHora(){
   DateTime now = rtc.now();
   lcd.clear();
   lcd.print(now.day());
   lcd.print('/');
   lcd.print(now.month());
   lcd.print('/');
   lcd.print(now.year());
   
   lcd.setCursor(0,1);
   horaR = now.hour();
   minuR = now.minute();
   seguR = now.second();
   lcd.print(now.hour());
   lcd.print(':');
   lcd.print(now.minute());
   lcd.print(':');
   lcd.print(now.second());
   //lcd.println();
  }

void setup () {

 Serial.begin(9600);
pinMode(BUZZER, OUTPUT);
pinMode(modo,INPUT);
pinMode(led,OUTPUT);
pinMode(setHora,INPUT);
pinMode(setMinu,INPUT);
pinMode(opcionAlarma,INPUT);
digitalWrite(led,LOW);
 delay(3000);




 //Comprobamos si tenemos el RTC conectado
 if (! rtc.begin()) {
 Serial.println("No hay un mÃ³dulo RTC");
 while (1);
 }

  lcd.init();
  lcd.backlight();
  rtc.begin(); 

 // Ponemos en hora, solo la primera vez, luego comentar y volver a cargar.
 // Ponemos en hora con los valores de la fecha y la hora en que el sketch ha sido compilado.
 rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
  myservo.attach(12);  // vincula el servo al pin digital 3
  myservo.write(0);
  
}

void loop () {
opcion = digitalRead(modo);
int opcionHora = digitalRead(setHora);
int opcionMinu = digitalRead(setMinu);
int opcionAlarmaa = digitalRead(opcionAlarma);
if(opcionAlarmaa==1){
  suenaAlarma=0;
  digitalWrite(led,HIGH);
    delay(1000);
    digitalWrite(led,LOW);
}
if(opcionHora==1){
    horaA++;
    if(horaA>=24){
      horaA=0;
    }
    digitalWrite(led,HIGH);
    delay(1000);
    digitalWrite(led,LOW);
}
 if(opcionMinu==1){
    minA++;
      if(minA>=60){
        minA=0;
      }
    digitalWrite(led,HIGH);
    delay(1000);
    digitalWrite(led,LOW);
 }
if(opcion==1)
{
  seleccion++;
  flag=0;
  digitalWrite(led,HIGH);
  delay(1000);
  digitalWrite(led,LOW);
}
if(seleccion>3){
    seleccion=1;
  }
Serial.print(opcion);

 switch(seleccion){
    case 1:
      mostrarHora();
      break;
    case 2:
      if(flag==0){
        horaA=horaR;
        minA=minuR+1;
        seguA = seguR;
        flag=1;
        suenaAlarma=1;
        }
      ajustarAlarma();
      break;
    case 3:
    opcion3();
      break;
 } 
 checkAlarma();  
 delay(1000); 
}
