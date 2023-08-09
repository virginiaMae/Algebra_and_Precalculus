import { t as Recoil_index_20, W as searchParamAtomFamily, aj as selectedCourseItems, a8 as itemByDoenetId, q as useCourse, r as reactExports, a3 as useToast, b as jsxs, F as Fragment, j as jsx, B as Button, c as FontAwesomeIcon, ao as faLayerGroup } from "./PageViewer-d914b069.js";
import { e as effectivePermissionsByCourseId } from "./RoleDropdown-ece1f3f8.js";
import { T as Textfield } from "./Textfield-0be9f722.js";
import { B as ButtonGroup } from "./ButtonGroup-b585a5ef.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
function SelectedBank() {
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const doenetId = Recoil_index_20(selectedCourseItems)[0];
  const { canEditContent } = Recoil_index_20(
    effectivePermissionsByCourseId(courseId)
  );
  const { label: recoilLabel } = Recoil_index_20(itemByDoenetId(doenetId));
  const { renameItem } = useCourse(courseId);
  const [itemTextFieldLabel, setItemTextFieldLabel] = reactExports.useState(recoilLabel);
  let { create, deleteItem } = useCourse(courseId);
  reactExports.useEffect(() => {
    setItemTextFieldLabel(recoilLabel);
  }, [recoilLabel]);
  const handelLabelModfication = () => {
    let effectiveItemLabel = itemTextFieldLabel;
    if (itemTextFieldLabel === "") {
      effectiveItemLabel = recoilLabel;
      if (recoilLabel === "") {
        effectiveItemLabel = "Untitled";
      }
      setItemTextFieldLabel(effectiveItemLabel);
    }
    if (recoilLabel !== effectiveItemLabel) {
      renameItem(doenetId, effectiveItemLabel);
    }
  };
  useToast();
  let heading = /* @__PURE__ */ jsxs("h2", { "data-test": "infoPanelItemLabel", style: { margin: "16px 5px" }, children: [
    /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faLayerGroup }),
    " ",
    recoilLabel
  ] });
  if (canEditContent === "1") {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      heading,
      /* @__PURE__ */ jsx(
        Textfield,
        {
          label: "Label",
          vertical: true,
          width: "menu",
          value: itemTextFieldLabel,
          onChange: (e) => setItemTextFieldLabel(e.target.value),
          onKeyDown: (e) => {
            if (e.keyCode === 13)
              handelLabelModfication();
          },
          onBlur: handelLabelModfication
        }
      ),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(ButtonGroup, { vertical: true, children: /* @__PURE__ */ jsx(
        Button,
        {
          width: "menu",
          onClick: () => create({ itemType: "page" }),
          value: "Add Page",
          dataTest: "Add Page"
        }
      ) }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(
        Button,
        {
          width: "menu",
          value: "Delete Collection",
          dataTest: "Delete Collection",
          alert: true,
          onClick: (e) => {
            e.preventDefault();
            e.stopPropagation();
            deleteItem({ doenetId });
          }
        }
      )
    ] });
  }
  return null;
}
export {
  SelectedBank as default
};
