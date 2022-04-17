function age(input) {
  const age = Number(input);
  const isOldEnough = age >= 18;

  if (isOldEnough) {
    console.log(
      `Sara can start driving license 🚚 becouse she is on  ${age} years`
    );
  } else {
    console.log(`Sara is bellow the proper years to drive!😥`);
  }
}
age(["15"]);
