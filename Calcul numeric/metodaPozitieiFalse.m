function xaprox = metodaPozitieiFalse(f,a,b,epsi)
    a0 = a;
    b0 = b;
    x0 = a0.*(f(b0) - b0.*f(a0)) ./ (f(b0) - f(a0));
    x1 = 0;
    while 1
        if(f(x0) == 0) 
            xaprox = x0;
            break
        end
        if((f(a0)*f(x0)) < 0)
            b0 = x0;
            x1 = (a0*f(b0) - b0*f(a0)) / (f(b0) - f(a0));
        elseif ((f(a0)*f(x0)) > 0)
            a0 = x0;
            x1 = (a0*f(b0) - b0*f(a0)) / (f(b0) - f(a0));
        end
        if(abs(x1 - x0) / abs(x0) >= epsi) 
            break;
        end
        x0 = x1;
    end
    xaprox = x1;
end