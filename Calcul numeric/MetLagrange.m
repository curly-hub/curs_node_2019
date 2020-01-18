function y = MetLagrange(X,Y,xgrafic)
    n = length(Y);
    y = 0;
    for k=1: +1: n
        L = 1;
        for i=1: +1: n
            if(i ~= k) 
                L = L * ((xgrafic - X(i)) / (X(k) - X(i)));
            end
        end
        y = y + L * Y(k);
    end
end