function dy = DerivNum(x,y, met)
   m = length(x) - 1;
   dy = zeros(1,m);
   switch met 
       case 1 
           for i=2:+1:m
               dy(i) = (y(i+1) - y(i) ) / (x(i+1) - x(i));
           end
       case 2
           for i=2:+1:m
               dy(i) = (y(i) - y(i-1)) / (x(i) - x(i-1));
           end
       case 3
           for i=2:+1:m
               dy(i) = (y(i+1) - y(i-1)) / (x(i+1) - x(i-1));
           end
   end
end