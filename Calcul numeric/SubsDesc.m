function [x] = SubsDesc(A,b) 
    n = length(b);
    x = zeros(n,1);
    x(n) = b(n)/A(n,n);
    for k = n - 1: -1: 1
        s = A(k,k+1:n)*x(k+1:n);
        x(k) = (1 / A(k,k)) * (b(k)- s);
    end
end