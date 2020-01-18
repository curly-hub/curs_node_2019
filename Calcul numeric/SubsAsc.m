function [x] = SubsAsc(A,b)
    n = length(b);
    x = zeros(n,1);
    x(1) = b(1)/A(1,1);
    for k = 2 : +1 : n
        s = A(k,1:k-1)*x(1:k-1);
        x(k) = (1 / A(k,k)) * (b(k) - s);
    end
end