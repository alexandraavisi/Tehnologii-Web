const years = [
    1978, 2005, 2019, 1999, 1988, 2014, 1996, 2004, 2015, 2008, 2007, 1992, 2002, 2025 
];

const currentYear = 2025;

const agesOver18 = (years, currentYear) => 
    years.filter((year) => currentYear - year >= 18)
    .map((year) => currentYear - year);

console.log(agesOver18(years, currentYear));
