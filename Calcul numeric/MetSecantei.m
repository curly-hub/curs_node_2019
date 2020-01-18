function xaprox = MetSecantei(f,a,b,x0,x1,epsi) 
    xk = x1;
    while (abs(x1 - x0) / abs(x0)) >= epsi
        xk = (x0*f(x1)-x1*f(x0)) / (f(x1) - f(x0));
        if(xk < a || xk > b)
            disp(['Introduceti alte valori pentru x0 si x1']);
            break;
        end
        x0 = x1;
        x1 = xk;
    end
    xaprox = xk;
end