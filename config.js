export let imagePath;
if (process.env.NODE_ENV === "github" || "production") {
  imagePath = "/manor";
} else {
  imagePath = "";
}
