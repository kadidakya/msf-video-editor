// استدعاء عناصر الواجهة
const videoInput = document.getElementById('videoInput');
const videoPreview = document.getElementById('videoPreview');
const trimBtn = document.getElementById('trimBtn');
const exportBtn = document.getElementById('exportBtn');

// حدث اختيار الفيديو من الهاتف
videoInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        // التحقق من أن الملف فيديو
        if (file.type.startsWith('video/')) {
            const videoURL = URL.createObjectURL(file);
            videoPreview.src = videoURL;
            videoPreview.load();
            console.log("تم تحميل الفيديو بنجاح:", file.name);
        } else {
            alert("الرجاء اختيار ملف فيديو صالح.");
        }
    }
});

// وظيفة زر القص (مبدئية)
trimBtn.addEventListener('click', function() {
    if (!videoPreview.src) {
        alert("الرجاء اختيار فيديو أولاً!");
        return;
    }
    alert("ميزة قص الفيديو قيد تطوير النسخة msf...");
    // هنا يمكنك لاحقاً إضافة منطق معالجة الفيديو (عبر FFmpeg.wasm أو أدوات أخرى)
});

// وظيفة زر التصدير (مبدئية)
exportBtn.addEventListener('click', function() {
    if (!videoPreview.src) {
        alert("الرجاء اختيار فيديو أولاً لتصديره!");
        return;
    }
    alert("جاري تحضير التصدير في تطبيق msf...");
});

