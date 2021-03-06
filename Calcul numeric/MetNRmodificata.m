function xaprox = MetNRmodificata(f,df, x3, epsi) 
    x0 = x3;
    x1 = x0;
    while 1
        x1 = x0 - (f(x0) / df(x0));
        if(abs((x1 - x0)) / abs(x0)) < epsi
            break;                        
        end
        x0 = x1;
    end
    xaprox = x1;
end