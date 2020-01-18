function xaprox = MetBisectiei(f, a, b, eroare) 
    a0 = a;
    b0 = b;
    a1 = a;
    b1 = b;
    x0 = (a + b)/2;
    N = (log2(((b-a))/ eroare) - 1) +1;
    
    for k=1 : round(N) 
        if f(x0) == 0
            x1 = x0;
            xaprox = x1;
            break;
        end
        if f(a0)*f(x0) < 0
            a1 = a0;
            b1 = x0;
            x1 = (a1 + b1)/2;
        else
            a1 = x0;
            b1 = b0;
            x1 = (a1+b1)/2;
        end
        a0 = a1;
        b0 = b1;
        x0 = x1;
        xaprox = x1;
    end
end