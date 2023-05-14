export const getNameFormats = (name: string) => {
  let shortName = "";
  if (!name) return { name: "", shortName: "" };
  const nameArray = name.toUpperCase().split(" ");
  const [firstName, lastName] = nameArray;

  if (firstName && lastName) {
    shortName = firstName[0] + lastName[0];
  } else {
    shortName = firstName[0] + firstName[1];
  }

  return { name, shortName };
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options = { day: "numeric", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-US", options as any);
};

// https://github.com/adityar15/vue3shoppingcartandtensorflow/blob/master/src/layouts/Layout.vue
