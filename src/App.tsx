import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=4b4fc605"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=4b4fc605"; const useState = __vite__cjsImport1_react["useState"]; const useEffect = __vite__cjsImport1_react["useEffect"];
import { BrowserRouter, Routes, Route, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=36cb1897";
import Sidebar from "/src/components/layout/Sidebar.tsx";
import Dashboard from "/src/components/Dashboard.tsx";
import BotManager from "/src/components/BotManager.tsx";
import MessageManager from "/src/components/MessageManager.tsx";
import ClientManager from "/src/components/ClientManager.tsx";
import { ToastProvider } from "/src/components/ui/Toast.tsx";
import Cursor from "/src/components/ui/Cursor.tsx";
import SearchOverlay from "/src/components/ui/SearchOverlay.tsx";
function AppContent() {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey) {
        if (e.key === "b") navigate("/bots");
        if (e.key === "m") navigate("/messages");
        if (e.key === "u") navigate("/clients");
        if (e.key === "d") navigate("/");
        if (e.key === "k") {
          e.preventDefault();
          setIsSearchOpen(true);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Cursor, {}, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(SearchOverlay, { isOpen: isSearchOpen, onClose: () => setIsSearchOpen(false) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex h-screen bg-bg-primary bg-luxury-grid", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "orb top-20 left-20 bg-gold" }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "orb bottom-20 right-20 bg-bronze" }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Sidebar, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("main", { className: "flex-1 p-12 overflow-y-auto", children: /* @__PURE__ */ jsxDEV(Routes, { children: [
        /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Dashboard, {}, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 45,
          columnNumber: 38
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Route, { path: "/bots", element: /* @__PURE__ */ jsxDEV(BotManager, {}, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 46,
          columnNumber: 42
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Route, { path: "/messages", element: /* @__PURE__ */ jsxDEV(MessageManager, {}, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 47,
          columnNumber: 46
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Route, { path: "/clients", element: /* @__PURE__ */ jsxDEV(ClientManager, {}, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 48,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/App.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
export default function App() {
  return /* @__PURE__ */ jsxDEV(ToastProvider, { children: /* @__PURE__ */ jsxDEV(BrowserRouter, { children: /* @__PURE__ */ jsxDEV(AppContent, {}, void 0, false, {
    fileName: "/app/applet/src/App.tsx",
    lineNumber: 60,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/App.tsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/App.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSwgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvU2lkZWJhcic7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9EYXNoYm9hcmQnO1xuaW1wb3J0IEJvdE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRzL0JvdE1hbmFnZXInO1xuaW1wb3J0IE1lc3NhZ2VNYW5hZ2VyIGZyb20gJy4vY29tcG9uZW50cy9NZXNzYWdlTWFuYWdlcic7XG5pbXBvcnQgQ2xpZW50TWFuYWdlciBmcm9tICcuL2NvbXBvbmVudHMvQ2xpZW50TWFuYWdlcic7XG5pbXBvcnQgeyBUb2FzdFByb3ZpZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3VpL1RvYXN0JztcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi9jb21wb25lbnRzL3VpL0N1cnNvcic7XG5pbXBvcnQgU2VhcmNoT3ZlcmxheSBmcm9tICcuL2NvbXBvbmVudHMvdWkvU2VhcmNoT3ZlcmxheSc7XG5cbmZ1bmN0aW9uIEFwcENvbnRlbnQoKSB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgW2lzU2VhcmNoT3Blbiwgc2V0SXNTZWFyY2hPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGUuY3RybEtleSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdiJykgbmF2aWdhdGUoJy9ib3RzJyk7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ20nKSBuYXZpZ2F0ZSgnL21lc3NhZ2VzJyk7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ3UnKSBuYXZpZ2F0ZSgnL2NsaWVudHMnKTtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnZCcpIG5hdmlnYXRlKCcvJyk7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ2snKSB7IGUucHJldmVudERlZmF1bHQoKTsgc2V0SXNTZWFyY2hPcGVuKHRydWUpOyB9XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICB9LCBbbmF2aWdhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q3Vyc29yIC8+XG4gICAgICA8U2VhcmNoT3ZlcmxheSBpc09wZW49e2lzU2VhcmNoT3Blbn0gb25DbG9zZT17KCkgPT4gc2V0SXNTZWFyY2hPcGVuKGZhbHNlKX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlbiBiZy1iZy1wcmltYXJ5IGJnLWx1eHVyeS1ncmlkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JiIHRvcC0yMCBsZWZ0LTIwIGJnLWdvbGRcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yYiBib3R0b20tMjAgcmlnaHQtMjAgYmctYnJvbnplXCIgLz5cbiAgICAgICAgPFNpZGViYXIgLz5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIHAtMTIgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxEYXNoYm9hcmQgLz59IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9ib3RzXCIgZWxlbWVudD17PEJvdE1hbmFnZXIgLz59IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9tZXNzYWdlc1wiIGVsZW1lbnQ9ezxNZXNzYWdlTWFuYWdlciAvPn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NsaWVudHNcIiBlbGVtZW50PXs8Q2xpZW50TWFuYWdlciAvPn0gLz5cbiAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8VG9hc3RQcm92aWRlcj5cbiAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICA8QXBwQ29udGVudCAvPlxuICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgIDwvVG9hc3RQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBbUNJLG1CQUNFLGNBREY7QUFuQ0o7QUFBQTtBQUFBO0FBQUE7QUFLQSxTQUFTLFVBQVUsaUJBQWlCO0FBQ3BDLFNBQVMsZUFBZSxRQUFRLE9BQU8sbUJBQW1CO0FBQzFELE9BQU8sYUFBYTtBQUNwQixPQUFPLGVBQWU7QUFDdEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxvQkFBb0I7QUFDM0IsT0FBTyxtQkFBbUI7QUFDMUIsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sbUJBQW1CO0FBRTFCLFNBQVMsYUFBYTtBQUNwQixRQUFNLFdBQVcsWUFBWTtBQUM3QixRQUFNLENBQUMsY0FBYyxlQUFlLElBQUksU0FBUyxLQUFLO0FBRXRELFlBQVUsTUFBTTtBQUNkLFVBQU0sZ0JBQWdCLENBQUMsTUFBcUI7QUFDMUMsVUFBSSxFQUFFLFNBQVM7QUFDYixZQUFJLEVBQUUsUUFBUSxJQUFLLFVBQVMsT0FBTztBQUNuQyxZQUFJLEVBQUUsUUFBUSxJQUFLLFVBQVMsV0FBVztBQUN2QyxZQUFJLEVBQUUsUUFBUSxJQUFLLFVBQVMsVUFBVTtBQUN0QyxZQUFJLEVBQUUsUUFBUSxJQUFLLFVBQVMsR0FBRztBQUMvQixZQUFJLEVBQUUsUUFBUSxLQUFLO0FBQUUsWUFBRSxlQUFlO0FBQUcsMEJBQWdCLElBQUk7QUFBQSxRQUFHO0FBQUEsTUFDbEU7QUFBQSxJQUNGO0FBQ0EsV0FBTyxpQkFBaUIsV0FBVyxhQUFhO0FBQ2hELFdBQU8sTUFBTSxPQUFPLG9CQUFvQixXQUFXLGFBQWE7QUFBQSxFQUNsRSxHQUFHLENBQUMsUUFBUSxDQUFDO0FBRWIsU0FDRSxtQ0FDRTtBQUFBLDJCQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFRO0FBQUEsSUFDUix1QkFBQyxpQkFBYyxRQUFRLGNBQWMsU0FBUyxNQUFNLGdCQUFnQixLQUFLLEtBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBNEU7QUFBQSxJQUM1RSx1QkFBQyxTQUFJLFdBQVUsOENBQ2I7QUFBQSw2QkFBQyxTQUFJLFdBQVUsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE0QztBQUFBLE1BQzVDLHVCQUFDLFNBQUksV0FBVSxzQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWtEO0FBQUEsTUFDbEQsdUJBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVM7QUFBQSxNQUNULHVCQUFDLFVBQUssV0FBVSwrQkFDZCxpQ0FBQyxVQUNDO0FBQUEsK0JBQUMsU0FBTSxNQUFLLEtBQUksU0FBUyx1QkFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVyxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXdDO0FBQUEsUUFDeEMsdUJBQUMsU0FBTSxNQUFLLFNBQVEsU0FBUyx1QkFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVksS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE2QztBQUFBLFFBQzdDLHVCQUFDLFNBQU0sTUFBSyxhQUFZLFNBQVMsdUJBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFnQixLQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXFEO0FBQUEsUUFDckQsdUJBQUMsU0FBTSxNQUFLLFlBQVcsU0FBUyx1QkFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWUsS0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFtRDtBQUFBLFdBSnJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFLQSxLQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFPQTtBQUFBLFNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVlBO0FBQUEsT0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBZ0JBO0FBRUo7QUFFQSx3QkFBd0IsTUFBTTtBQUM1QixTQUNFLHVCQUFDLGlCQUNDLGlDQUFDLGlCQUNDLGlDQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBWSxLQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJQTtBQUVKOyIsIm5hbWVzIjpbXX0=