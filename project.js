function findTriangleType(side1,side2,side3) {
    if (side1==side2 && side1==side3 && side2==side3) {
        return `equilateral triangle.`
        
    }
    // savolda shu yerda uchalasi ham equall bolsin deyilgan edi. men ozim o'zgartirdim
    else if(side1==side2 && side1!=side3 && side2!=side3 ){
        return `Isosceles triangle.`
    }
    else if(side1!=side2 && side1!=side3 || side2!=side3){
        return `Scalene triangle`
    }
    
}
console.log(findTriangleType(3,2,3));