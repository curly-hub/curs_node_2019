function y = splineLex1PctE(X,Y, x) 
    n = length(X) - 1;
    a = Y(1:n);
    b = zeros(n);
    for j = 1: +1: n
        b(j) = (Y(j+1) - Y(j)) / (X(j+1) - X(j));
    end
    S = linspace(1,100);
    for j = 1: +1: n
        index = x >= X(j) & x <= X(j+1);
        S(index) = a(j) + b(j)*(x(index) - X(j)); 
    end
    y = S;
end