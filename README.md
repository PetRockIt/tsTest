The following error occurs. Immediately refresh and the app subsequently works as normal.

An unhandled exception occurred while processing the request.
NodeInvocationException: Prerendering failed because of error: ReferenceError: window is not defined
at Object.<anonymous> (z:\dev\tsTest\ClientApp\dist\vendor.js:4556:13)
at module.exports.module.exports.1027.__meta__.id (z:\dev\tsTest\ClientApp\dist\vendor.js:146:225)
at Object.<anonymous> (z:\dev\tsTest\ClientApp\dist\vendor.js:147:4)
at Object.1027 (z:\dev\tsTest\ClientApp\dist\vendor.js:4562:31)
at __webpack_require__ (z:\dev\tsTest\ClientApp\dist\vendor.js:94:30)
at Object.0 (z:\dev\tsTest\ClientApp\dist\vendor.js:122:19)
at __webpack_require__ (z:\dev\tsTest\ClientApp\dist\vendor.js:94:30)
at z:\dev\tsTest\ClientApp\dist\vendor.js:114:18
at Object.<anonymous> (z:\dev\tsTest\ClientApp\dist\vendor.js:117:10)
at __webpack_require__ (z:\dev\tsTest\ClientApp\dist\vendor.js:21:30)
Current directory is: z:\dev\tsTest
Microsoft.AspNetCore.NodeServices.HostingModels.HttpNodeInstance+<InvokeExportAsync>d__7.MoveNext()