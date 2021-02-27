class PolynomialCalculator {
    polynomial(members) {
        return new Polynomial(members)
    };

    add(a,b) {
        const calc = new UniversalCalculator;
        const members = [];
        a.poly.forEach(elemA => {
            const member = b.poly.find(elemB => elemB.power === elemA.power);
                if (member) {
                    members.push(new Member(calc.add(elemA.value, member.value) , a.power))
                } else {
                    members.push(new Member(elemA.value , elemA.power));
                }
                poly.forEach(elemB => {
                    if(!members.find(elem => elem.power === elemB.power)) {
                        members.push(new Member(elemB.value , elemB.power));
                    }
                })

        });
        return new Polynomial(member);
    }




}