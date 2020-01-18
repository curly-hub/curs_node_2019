function rez =  Integrare(f,x,metoda)
    rez = 0;
    h = 0;
    m = length(x)-1;
    if(metoda == "dreptunghi")
        h = (x(2) - x(1)) / 2;
        for i=1: m 
            rez = rez + 2*h*f((x(i) + x(i+1)) / 2);
        end
    end
    
    if(metoda == "trapezului")
       h = x(2) - x(1);
       for i=1 : m
        rez = rez + h * ((f(x(i)) + f(x(i + 1))) / 2);
       end
    end
    
    if(metoda == "simpson")
        h = (x(2) - x(1)) / 2;
        for i=1 : m
        rez = rez + h/3 *(f(x(i)) + 4*(f((x(i) + x(i+1)) / 2)) + f(x(i+1)));
       end
    end
    
    if (metoda == "simpson3")
        h = (x(2) - x(1)) / 3;
        for i=1: m
            rez = rez + (3*h)/8 * (f(x(i)) + 3*f((2*x(i) + x(i+1))/3) + 3 * f( (x(i) + 2 *(x(i+1)) ) / 3) + f(x(i+1)));
        end
    end
end