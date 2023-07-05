export let imagePath;
if (process.env.NODE_ENV === "github") {
  imagePath = "/manor";
} else {
  imagePath = "";
}
