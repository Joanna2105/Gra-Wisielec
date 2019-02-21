//tablica z hasłami

var tablica_z_haslami = new Array(5);
tablica_z_haslami[0] = "Polak głodny Polak zły";
tablica_z_haslami[1] = "Apetyt rośnie w miarę jedzenia";
tablica_z_haslami[2] = "Wyjątek potwierdza regułę";
tablica_z_haslami[3] = "Baba z wozu koniom lżej";
tablica_z_haslami[4] = "Dla chcącego nic trudnego";
tablica_z_haslami[5] = "Elektryka prąd nie tyka";
tablica_z_haslami[6] = "Głodnemu chleb na myśli";
tablica_z_haslami[7] = "Jedna jaskółka wiosny nie czyni";
tablica_z_haslami[8] = "Kombinuje jak koń pod górę";
tablica_z_haslami[9] = "Lepiej późno niż wcale";
tablica_z_haslami[10] = "Niedaleko pada jabłko od jabłoni";


//losowanie hasła

function losowanie() 
    {
    var wylosowana_liczba = Math.round(Math.random() * tablica_z_haslami.length);
    wylosowane_haslo = tablica_z_haslami[wylosowana_liczba];
    }

losowanie();

//zmienna

var haslo = wylosowane_haslo; 



// zmienianie liter na wielkie litery
haslo = haslo.toUpperCase() 

var dlugosc = haslo.length; 

var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");



//tworzenie kopii oryginału
var haslo1 = "";

//pętla do wykreskowania hasła

for(i=0; i<dlugosc; i++)

    {
        if(haslo.charAt(i)==" ")haslo1 = haslo1 + " ";
        else haslo1 = haslo1 +"_";
    }
    
    
function wypisz_haslo()
    {
       document.getElementById("slowo").innerHTML = haslo1;
    }

//załadownaie

window.onload = start;  

//tablica z literami do wyboru
var litery = new Array(35);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";


//tworzy pole z literami do wyboru poprzez dodanie divów 

function start()
{
    
   var tresc_diva = "";
    
    for(i=0;i<=34;i++) //pęla generująca litery
        
        {
            var element = "lit" + i;
            
          tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';  
            if((i+1) % 7==0)tresc_diva = tresc_diva + '<div style="clear:both;"></div>' 
        }
   
   document.getElementById("literki").innerHTML = tresc_diva;
    
    wypisz_haslo();
}




//funkcja zmieniająca zadany znak w łańcuchu

String.prototype.ustawZnak = function(miejsce, znak)
    {
        if(miejsce > this.length - 1)return this.toString();
        else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
    }

//sprawdzanie kliknięcia literek czy znajdują się w haśle

function sprawdz(nr)
{
    var trafiona = false;
    
    for(i=0; i<dlugosc; i++)
        
        
        {
           if (haslo.charAt(i) == litery[nr])
               {
                   //zamiana litery w haśle
                 haslo1 = haslo1.ustawZnak(i,litery[nr]);
                    trafiona = true;
               }
             }
    
    
    //podświetlanie pasujących znaków na zielono za pomocą zmiany styli w JS
    
    if(trafiona == true)  
        {
         
            yes.play();
            var element = "lit" + nr;  
         document.getElementById(element).style.background = "#003300";
            document.getElementById(element).style.color = "#00C000";
             document.getElementById(element).style.border = "3px solid #00c000";
            document.getElementById(element).style.cursor = "default";
            
         wypisz_haslo(); 
        }
    
    //podświetlanie niepasuących znaków na czerwono
    
    else 
        {
          
        no.play();
        var element = "lit" + nr;  
         document.getElementById(element).style.background = "#33000";
            document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
            document.getElementById(element).style.cursor = "default";
        
        document.getElementById(element).setAttribute("onclick",";");
        
      // błędy klik i zmiana obrazka na kolejny 
       
        ile_skuch++
       
       var obraz = "img/s" + ile_skuch + ".jpg";  document.getElementById("wisielec").innerHTML = '<img src="'+obraz+'" alt=""/>';
    }
    //wygrana i reload strony po kliknięciu na "Powtórz grę."
    
    
    if(haslo == haslo1)
        
    document.getElementById("literki").innerHTML = "Brawo! Odgadłeś hasło: "+wylosowane_haslo+'<br /><br /><span class="reset" onclick="location.reload() "> POWTÓRZ GRĘ</span>';
    
    
    //przegrana i reload strony po kliknięciu na "Powtórz grę." 
    
    if (ile_skuch>=9)
     document.getElementById("literki").innerHTML = "Przegrałeś! Hasło to: "+wylosowane_haslo+'<br /><br /><span class="reset" onclick="location.reload() ">POWTÓRZ GRĘ</span>';
}