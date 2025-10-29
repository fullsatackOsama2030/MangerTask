
https://gilded-starlight-50ac59.netlify.app/

مكون قائمة المهام (TodoList) - تطبيق إدارة المهام التفاعلي

الوظائف الرئيسية:
- عرض قائمة المهام مع إمكانية التصفية (الكل/المكتملة/غير المكتملة)
- إضافة مهام جديدة through مدخل نصي
- تحديث المهام الموجودة through نافذة مشروحة
- حذف المهام through نافذة تأكيد
- استخدام نظام إشعارات لتأكيد العمليات

التقنيات المستخدمة:
- React Hooks (useState, useEffect, useMemo)
- إدارة State باستخدام useReducer through Context
- واجهات Material-UI (MUI) للعناصر
- تصميم متجاوب مع Containers وGrid system

الهيكل:
- مكون رئيسي يدير حالة التطبيق
- مكونات فرعية للعرض (Todo) والنوافذ المشروحة (UpdatePromp, DeletePromp)
- نظام تصفية ديناميكي باستخدام ToggleButtonGroup
- إدارة الحالة through Context API مخصص
