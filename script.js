// cours 59: ne pas finish
// ----------------------------------------------------------------------------
// The btoa() method encodes a string in base-64.
// btoa() : يتم استخدامها لتشفير بيانات النصية إلى تشفير بنظام القاعدة64
// ----------------------------------------------------------------------------
// This method uses the "A-Z", "a-z", "0-9", "+", "/" and "=" characters to encode the string. 
// هذا عنصر يستخدم احرف اللغة الإنجليزية , الصغيرة والكبيرة , الأرقام و علامة 
// +  و  /  و =
// عندما يقوم بتشفير النص
//------------------------------------------------------------------------------
// Tip: Use the atob() method to decode a base-64 encoded string.
// atob() : يتم استخدام هذا العنصر لفك تشفير نص مشفر بنظام قاعدة64
// targer="_blank" صفحة منبثقة

var textarea = document.getElementById("text");
var result = document.getElementById("result");
var select = document.getElementById("select");

textarea.addEventListener("input",()=>{
    make_result()
});

select.addEventListener("change",()=>{
    make_result()
})

function make_result(){
    if (select.value == "ecode"){
        result.value = btoa (textarea.value);
    }
    else{
        result.value = atob (textarea.value);
    }
}
