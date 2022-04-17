function BMI(input) {
  const height = Number(input[0]);
  const mass = Number(input[1]);

  let bmi = mass / height ** 2;

  const JohnHeight = 1.95;
  const JohnMass = 92;

  let BMI = JohnMass / JohnHeight ** 2;

  let heigherBMI = bmi > BMI;

  if (bmi > BMI) {
    console.log(`bmi is higher than John with ${bmi - BMI}`);
  } else {
    console.log(`John BMP is highre than Mark with ${BMI - bmi}`);
  }
}
BMI(["1.69", "78"]);
