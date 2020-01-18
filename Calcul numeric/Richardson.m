function df = Richardson(f,x,h,n) 
    phi = @(h) (f((x+h)) - f(x)) / h;
    Q = zeros(n);
    for i=1:+1:n 
        Q(i,1) = phi((h/(2^(i-1))));
    end
    
    for i=2:+1:n
        for j=2:+1:i
            Q(i,j) = Q(i,j-1) + (Q(i,j-1) - Q(i-1,j-1)) / (2^(j-1) - 1);
        end
    end
    df = Q(n,n);
end