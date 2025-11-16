module.exports = [
"[project]/app/(auth routes)/sign-in/SignInPage.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "SignInPage-module__QK7xoW__actions",
  "error": "SignInPage-module__QK7xoW__error",
  "form": "SignInPage-module__QK7xoW__form",
  "formGroup": "SignInPage-module__QK7xoW__formGroup",
  "formTitle": "SignInPage-module__QK7xoW__formTitle",
  "input": "SignInPage-module__QK7xoW__input",
  "mainContent": "SignInPage-module__QK7xoW__mainContent",
  "submitButton": "SignInPage-module__QK7xoW__submitButton",
});
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/lib/api/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
const baseURL = `${("TURBOPACK compile-time value", "http://localhost:3000")}/api`;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: baseURL,
    withCredentials: true
});
}),
"[project]/lib/api/clientApi.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNote",
    ()=>createNote,
    "deleteNote",
    ()=>deleteNote,
    "fetchNoteById",
    ()=>fetchNoteById,
    "fetchNotes",
    ()=>fetchNotes,
    "login",
    ()=>login,
    "register",
    ()=>register
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/api.ts [app-rsc] (ecmascript)");
;
{
/*
login
logout
checkSession
getMe
updateMe  
    */ }const myKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx5dHZpbmVua28wMUBnbWFpbC5jb20iLCJpYXQiOjE3NjA0NDMzMjB9.WG1EvLMcBLV7NgZKvxi2vNu11oGTLikSbgTgGzQN1kQ");
const authHeaders = {
    Authorization: `Bearer ${myKey}`
};
const fetchNotes = async (search, page, tag)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get("/notes", {
            params: {
                search,
                page,
                perPage: 12,
                sortBy: "created",
                tag
            },
            headers: authHeaders
        });
        const result = res.data;
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return {
            notes: [],
            totalPages: 0
        };
    }
};
const fetchNoteById = async (id)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get(`/notes/${id}`, {
            headers: authHeaders
        });
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
const createNote = async (values)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].post(`/notes`, values, {
            headers: authHeaders
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
const deleteNote = async (noteId)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].delete(`/notes/${noteId}`, {
            headers: authHeaders
        });
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
const register = async (data)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].post("/auth/register", data, {
            headers: authHeaders,
            withCredentials: true
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        const err = error;
        console.error(err);
        throw new Error(err.response?.data?.error || "Registration failed");
    }
};
const login = async (data)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].post("/auth/login", data, {
            headers: authHeaders,
            withCredentials: true
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        const err = error;
        console.error(err);
        throw new Error(err.response?.data?.error || "Registration failed");
    }
};
}),
"[project]/app/(auth routes)/sign-in/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(auth routes)/sign-in/SignInPage.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/clientApi.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const SignInPage = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRouter"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = async (formData)=>{
        try {
            const formValues = Object.fromEntries(formData);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["login"])(formValues);
            if (res) {
                router.push("/profile");
            } else {
                setError("Invalid email or password");
            }
        } catch (error) {
            const err = error;
            setError(err.response?.data?.error ?? err.message ?? "Oops... some error");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mainContent,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].form,
                action: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].formTitle,
                        children: "Sign in"
                    }, void 0, false, {
                        fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].formGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "email",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "email",
                                type: "email",
                                name: "email",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].input,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].formGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "password",
                                children: "Password"
                            }, void 0, false, {
                                fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "password",
                                type: "password",
                                name: "password",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].input,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].actions,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].submitButton,
                            children: "Log in"
                        }, void 0, false, {
                            fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].error,
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = SignInPage;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ef25d702._.js.map