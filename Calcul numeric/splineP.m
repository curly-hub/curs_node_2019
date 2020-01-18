function y = splineP(X,Y,fPa, x) 
    n = length(X) - 1;
    a = Y(1:n);
    b = zeros(n);
    c = zeros(n);
    for j = 1: +1: n
        b(j) = (Y(j+1) - Y(j)) / (X(j+1) - X(j));
        
    end
    S = linspace(1,100);
    for j = 1: +1: n
        index = x >= X(j) & x <= X(j+1);
        S(index) = a(j) + b(j)*(x(index) - X(j))*c(j)*(x-X(j))^2; 
    end
    y = S;
end