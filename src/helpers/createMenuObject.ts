type MenuOptions = "" | "all" | "dogs" | "cats" | "fishes"
export const createMenuObject = (activeMenu: MenuOptions) => {
  let obj = {
    all: false,
    dogs: false,
    cats: false,
    fishes: false,
  }

  if (activeMenu !== "") {
    obj[activeMenu] = true
  }

  return obj
}
