// utils.ts

export const calculateExperience = (startDate: Date): string => {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }
    if (now.getDate() < startDate.getDate()) {
      months--;
      if (months < 0) {
        years--;
        months += 12;
      }
    }
    return `${years} Years, ${months} Months Experience`;
  };