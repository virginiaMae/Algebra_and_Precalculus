import { r as reactExports, m as Recoil_index_22, J as darkModeAtom, j as jsx, P as PageViewer, b as jsxs, C as createRoot, D as Recoil_index_5, K as BrowserRouter, M as Routes, Q as Route, S as DarkmodeController, v as betterReactMathjax, G as mathjaxConfig } from "./PageViewer-d914b069.js";
import { A as ActivityViewer } from "./ActivityViewer-b51a59ab.js";
import "./activityUtils-7af1fc96.js";
import "./visibility-sensor-57589aaf.js";
import "./ActionButton-1e9c5f7a.js";
import "./ButtonGroup-b585a5ef.js";
function Test() {
  const defaultTestSettings = {
    updateNumber: 0,
    attemptNumber: 1,
    controlsVisible: false,
    showCorrectness: true,
    readOnly: false,
    showFeedback: true,
    showHints: true,
    allowLoadState: false,
    allowSaveState: false,
    allowLocalState: false,
    allowSaveSubmissions: false,
    allowSaveEvents: false,
    autoSubmit: false,
    paginate: true
  };
  let testSettings = JSON.parse(localStorage.getItem("test settings"));
  if (!testSettings) {
    testSettings = defaultTestSettings;
    localStorage.setItem("test settings", JSON.stringify(defaultTestSettings));
  }
  const [{ doenetML, activityDefinition, attemptNumber }, setBaseState] = reactExports.useState({
    doenetML: null,
    activityDefinition: null,
    attemptNumber: testSettings.attemptNumber
  });
  const [updateNumber, setUpdateNumber] = reactExports.useState(testSettings.updateNumber);
  const [controlsVisible, setControlsVisible] = reactExports.useState(
    testSettings.controlsVisible
  );
  const [showCorrectness, setShowCorrectness] = reactExports.useState(
    testSettings.showCorrectness
  );
  const [readOnly, setReadOnly] = reactExports.useState(testSettings.readOnly);
  const [showFeedback, setShowFeedback] = reactExports.useState(testSettings.showFeedback);
  const [showHints, setShowHints] = reactExports.useState(testSettings.showHints);
  const [darkModeToggle, setDarkModeToggle] = Recoil_index_22(darkModeAtom);
  const [allowLoadState, setAllowLoadState] = reactExports.useState(
    testSettings.allowLoadState
  );
  const [allowSaveState, setAllowSaveState] = reactExports.useState(
    testSettings.allowSaveState
  );
  const [allowLocalState, setAllowLocalState] = reactExports.useState(
    testSettings.allowLocalState
  );
  const [allowSaveSubmissions, setAllowSaveSubmissions] = reactExports.useState(
    testSettings.allowSaveSubmissions
  );
  const [allowSaveEvents, setAllowSaveEvents] = reactExports.useState(
    testSettings.allowSaveEvents
  );
  const [autoSubmit, setAutoSubmit] = reactExports.useState(testSettings.autoSubmit);
  const [paginate, setPaginate] = reactExports.useState(testSettings.paginate);
  reactExports.useState(0);
  const solutionDisplayMode = "button";
  let requestedVariantIndex = reactExports.useRef(void 0);
  window.onmessage = (e) => {
    let newDoenetML = null, newActivityDefinition = null, newAttemptNumber = attemptNumber;
    if (e.data.doenetML !== void 0) {
      newDoenetML = e.data.doenetML;
    } else if (e.data.activityDefinition !== void 0) {
      newActivityDefinition = e.data.activityDefinition;
    }
    if (e.data.requestedVariantIndex !== void 0) {
      requestedVariantIndex.current = e.data.requestedVariantIndex;
    }
    if (e.data.attemptNumber !== void 0) {
      newAttemptNumber = e.data.attemptNumber;
      testSettings.attemptNumber = newAttemptNumber;
      localStorage.setItem("test settings", JSON.stringify(testSettings));
    }
    if (newDoenetML || newActivityDefinition || newAttemptNumber !== attemptNumber) {
      setBaseState({
        doenetML: newDoenetML,
        activityDefinition: newActivityDefinition,
        attemptNumber: newAttemptNumber
      });
    }
  };
  let controls = null;
  let buttonText = "show";
  if (controlsVisible) {
    buttonText = "hide";
    controls = /* @__PURE__ */ jsxs("div", { style: { padding: "8px" }, children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "button",
        {
          id: "testRunner_resetControls",
          onClick: () => {
            localStorage.setItem(
              "test settings",
              JSON.stringify(defaultTestSettings)
            );
            location.href = "/test";
          },
          children: "Reset"
        }
      ) }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
        "Attempt Number: ",
        attemptNumber,
        " ",
        /* @__PURE__ */ jsx(
          "button",
          {
            id: "testRunner_newAttempt",
            onClick: () => {
              testSettings.attemptNumber = testSettings.attemptNumber + 1;
              localStorage.setItem(
                "test settings",
                JSON.stringify(testSettings)
              );
              setBaseState((was) => {
                let newObj = { ...was };
                newObj.attemptNumber++;
                return newObj;
              });
            },
            children: "New Attempt"
          }
        ),
        " ",
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              testSettings.attemptNumber = 1;
              localStorage.setItem(
                "test settings",
                JSON.stringify(testSettings)
              );
              setBaseState((was) => {
                let newObj = { ...was };
                newObj.attemptNumber = 1;
                return newObj;
              });
            },
            children: "Reset Attempt Number"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
        " ",
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "testRunner_showCorrectness",
            type: "checkbox",
            checked: showCorrectness,
            onChange: () => {
              testSettings.showCorrectness = !testSettings.showCorrectness;
              localStorage.setItem(
                "test settings",
                JSON.stringify(testSettings)
              );
              setShowCorrectness((was) => !was);
              setUpdateNumber((was) => was + 1);
            }
          }
        ),
        "Show Correctness"
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
        " ",
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "testRunner_readOnly",
            type: "checkbox",
            checked: readOnly,
            onChange: () => {
              testSettings.readOnly = !testSettings.readOnly;
              localStorage.setItem(
                "test settings",
                JSON.stringify(testSettings)
              );
              setReadOnly((was) => !was);
              setUpdateNumber((was) => was + 1);
            }
          }
        ),
        "Read Only"
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
        " ",
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "testRunner_showFeedback",
            type: "checkbox",
            checked: showFeedback,
            onChange: () => {
              testSettings.showFeedback = !testSettings.showFeedback;
              localStorage.setItem(
                "test settings",
                JSON.stringify(testSettings)
              );
              setShowFeedback((was) => !was);
              setUpdateNumber((was) => was + 1);
            }
          }
        ),
        "Show Feedback"
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
        " ",
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "testRunner_showHints",
            type: "checkbox",
            checked: showHints,
            onChange: () => {
              testSettings.showHints = !testSettings.showHints;
              localStorage.setItem(
                "test settings",
                JSON.stringify(testSettings)
              );
              setShowHints((was) => !was);
              setUpdateNumber((was) => was + 1);
            }
          }
        ),
        "Show Hints"
      ] }) }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
        " ",
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "testRunner_allowLoadState",
            type: "checkbox",
            checked: allowLoadState,
            onChange: () => {
              testSettings.allowLoadState = !testSettings.allowLoadState;
              localStorage.setItem(
                "test settings",
                JSON.stringify(testSettings)
              );
              setAllowLoadState((was) => !was);
              setUpdateNumber((was) => was + 1);
            }
          }
        ),
        "Allow Load Page State"
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
        " ",
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "testRunner_allowSaveState",
            type: "checkbox",
            checked: allowSaveState,
            onChange: () => {
              testSettings.allowSaveState = !testSettings.allowSaveState;
              localStorage.setItem(
                "test settings",
                JSON.stringify(testSettings)
              );
              setAllowSaveState((was) => !was);
              setUpdateNumber((was) => was + 1);
            }
          }
        ),
        "Allow Save Page State"
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
        " ",
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "testRunner_allowLocalState",
            type: "checkbox",
            checked: allowLocalState,
            onChange: () => {
              testSettings.allowLocalState = !testSettings.allowLocalState;
              localStorage.setItem(
                "test settings",
                JSON.stringify(testSettings)
              );
              setAllowLocalState((was) => !was);
              setUpdateNumber((was) => was + 1);
            }
          }
        ),
        "Allow Local Page State"
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
        " ",
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "testRunner_allowSaveSubmissions",
            type: "checkbox",
            checked: allowSaveSubmissions,
            onChange: () => {
              testSettings.allowSaveSubmissions = !testSettings.allowSaveSubmissions;
              localStorage.setItem(
                "test settings",
                JSON.stringify(testSettings)
              );
              setAllowSaveSubmissions((was) => !was);
              setUpdateNumber((was) => was + 1);
            }
          }
        ),
        "Allow Save Submissions"
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
        " ",
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "testRunner_allowSaveEvents",
            type: "checkbox",
            checked: allowSaveEvents,
            onChange: () => {
              testSettings.allowSaveEvents = !testSettings.allowSaveEvents;
              localStorage.setItem(
                "test settings",
                JSON.stringify(testSettings)
              );
              setAllowSaveEvents((was) => !was);
              setUpdateNumber((was) => was + 1);
            }
          }
        ),
        "Allow Save Events"
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
        " ",
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "testRunner_autoSubmit",
            type: "checkbox",
            checked: autoSubmit,
            onChange: () => {
              testSettings.autoSubmit = !testSettings.autoSubmit;
              localStorage.setItem(
                "test settings",
                JSON.stringify(testSettings)
              );
              setAutoSubmit((was) => !was);
              setUpdateNumber((was) => was + 1);
            }
          }
        ),
        "Auto Submit Answers"
      ] }) }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
        " ",
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "testRunner_paginate",
            type: "checkbox",
            checked: paginate,
            onChange: () => {
              testSettings.paginate = !testSettings.paginate;
              localStorage.setItem(
                "test settings",
                JSON.stringify(testSettings)
              );
              setPaginate((was) => !was);
              setUpdateNumber((was) => was + 1);
            }
          }
        ),
        "Paginate"
      ] }) }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
        " ",
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "testRunner_darkmode",
            type: "checkbox",
            checked: darkModeToggle === "dark",
            onChange: () => {
              setDarkModeToggle(darkModeToggle === "dark" ? "light" : "dark");
            }
          }
        ),
        "Dark Mode"
      ] }) })
    ] });
  }
  let viewer = null;
  if (doenetML !== null) {
    viewer = /* @__PURE__ */ jsx(
      PageViewer,
      {
        doenetML,
        updateDataOnContentChange: true,
        flags: {
          showCorrectness,
          readOnly,
          solutionDisplayMode,
          showFeedback,
          showHints,
          allowLoadState,
          allowSaveState,
          allowLocalState,
          allowSaveSubmissions,
          allowSaveEvents,
          autoSubmit
        },
        attemptNumber,
        requestedVariantIndex: requestedVariantIndex.current,
        doenetId: "doenetIdFromCypress",
        pageIsActive: true
      },
      "pageviewer" + updateNumber
    );
  } else if (activityDefinition !== null) {
    viewer = /* @__PURE__ */ jsx(
      ActivityViewer,
      {
        activityDefinition,
        updateDataOnContentChange: true,
        flags: {
          showCorrectness,
          readOnly,
          solutionDisplayMode,
          showFeedback,
          showHints,
          allowLoadState,
          allowSaveState,
          allowLocalState,
          allowSaveSubmissions,
          allowSaveEvents,
          autoSubmit
        },
        attemptNumber,
        requestedVariantIndex: requestedVariantIndex.current,
        doenetId: "doenetIdFromCypress",
        paginate
      },
      "activityViewer" + updateNumber
    );
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: { backgroundColor: "var(--canvas)", color: "var(--canvastext)" },
      children: [
        /* @__PURE__ */ jsxs("div", { style: { backgroundColor: "var(--mainGray)" }, children: [
          /* @__PURE__ */ jsxs("h3", { children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                id: "testRunner_toggleControls",
                onClick: () => setControlsVisible((was) => !was),
                children: [
                  buttonText,
                  " controls"
                ]
              }
            ),
            "Test Viewer and Core"
          ] }),
          controls
        ] }),
        viewer
      ]
    }
  );
}
const root = createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ jsx(Recoil_index_5, { children: /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsx(
    Route,
    {
      path: "*",
      element: /* @__PURE__ */ jsx(DarkmodeController, { children: /* @__PURE__ */ jsx(
        betterReactMathjax.MathJaxContext,
        {
          version: 2,
          config: mathjaxConfig,
          onStartup: (mathJax) => mathJax.Hub.processSectionDelay = 0,
          children: /* @__PURE__ */ jsx(Test, {})
        }
      ) })
    }
  ) }) }) })
);
