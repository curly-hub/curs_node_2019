function [delta] = JacobiDeAprox(A, epsi) 
    n = length(A);
    while sqrt(sumsqr(A) - sumsqr(diag(A))) >= epsi
      M = A - diag(diag(A));
      valmax =  max(abs(M(:)));
      [p q] = find(abs(M) == valmax,1, 'first');
      if(A(p,p) == A(q,q))
        theta = pi / 4;
      else
        theta = 1/2 * atan((2* A(p,q))/(A(q,q)-A(p,p)));
      end
    c = cos(theta);
    s = sin(theta);
    for j=1: +1: n
        if ((j ~= p) && (j ~= q))
            u = A(p,j)*c - A(q,j)*s;
            v = A(p,j)* s + A(q,j)*c;
            A(p,j) = u;
            A(q,j) = v;
            A(j,p) = u;
            A(j,q) = v;
        end
    end
    u = c*c*A(p,p) - (2*c*s*A(p,q)) + (s*s*A(q,q));
    v = s*s*A(p,p) + (2*c*s*A(p,q)) + (c*c*A(q,q));
    A(p,p) = u;
    A(q,q) = v;
    A(p,q) = 0;
    A(q,p) = 0;
    end
    delta = diag(A);
end