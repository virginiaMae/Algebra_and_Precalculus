import { t as Recoil_index_20, W as searchParamAtomFamily, aa as coursePermissionsAndSettingsByCourseId, b as jsxs, F as Fragment, j as jsx } from "./PageViewer-d914b069.js";
import { f as find_image_label, a as find_color_label } from "./util-b6992d9f.js";
import "./util-2e804dda.js";
function DataCap() {
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const tool = Recoil_index_20(searchParamAtomFamily("tool"));
  let course = Recoil_index_20(coursePermissionsAndSettingsByCourseId(courseId));
  if (!course || Object.keys(course).length == 0) {
    return null;
  }
  let color = course.color;
  let image = course.image;
  let label = course.label;
  let accessible_name = "course";
  if (image != "none") {
    accessible_name = find_image_label(image);
    image = "url(/drive_pictures/" + image + ")";
  }
  if (color != "none") {
    accessible_name = find_color_label(color);
    color = "#" + color;
  }
  let toolText = "";
  if (tool == "navigation") {
    toolText = "Course Navigation";
  } else if (tool == "dashboard") {
    toolText = "Dashboard";
  } else if (tool == "data") {
    toolText = "Data";
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          position: "relative",
          width: "100%",
          height: "165px",
          overflow: "hidden"
        },
        children: /* @__PURE__ */ jsx(
          "img",
          {
            "aria-label": accessible_name,
            style: {
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: image,
              backgroundColor: color
            }
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("b", { children: toolText }),
    /* @__PURE__ */ jsxs("div", { style: { padding: "16px 12px" }, children: [
      /* @__PURE__ */ jsx("span", { style: { marginBottom: "15px" }, children: label }),
      " ",
      /* @__PURE__ */ jsx("br", {})
    ] })
  ] });
}
export {
  DataCap as default
};
