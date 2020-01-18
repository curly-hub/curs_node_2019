function y = splineL(X,Y, x) 
    n = length(X) - 1;
    a = Y(1:n);
    b = zeros(n);
    for j = 1: +1: n
        b(j) = (Y(j+1) - Y(j)) / (X(j+1) - X(j));
    end
    S = 0;
    for j = 1: +1: n
        if(x >= X(j) && x <= X(j+1))
            S = a(j) + b(j)*(x - X(j));
            break;
        end
    end
    y = S;
end