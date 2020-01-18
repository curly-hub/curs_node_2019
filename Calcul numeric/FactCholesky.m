function [L,x] = FactCholesky(A,b)
    [~,n] = size(A);
    if(A(1,1) <= 0)
        disp("A nu este pozitiv definita 1");
        return;
    end
    L(1,1) = sqrt(A(1,1));
    for i=2 : n 
        L(i,1) = A(i,1) ./ L(1,1);
    end
    for k=2 : n
        L
        alfa = A(k,k) - sum(L(k,1:k-1).^2);
        if(alfa <= 0)
            disp(['A nu este pozitiv definita 2 ', num2str(k)]);
            return;
        end
        L(k,k) = sqrt(alfa);
        for i = k+1 : n
            L(i,k) = 1./L(k,k) .* (A(i,k) - sum(L(i,1:k-1) .* L(k, 1:k-1)));
        end
    end
    y = SubsAsc(L,b);
    x = SubsDesc(L.',y);
end
