const services = [
{
    icon: '🏗️',
    en: {
        title:'Android Project Setup',
        description:'Setting up a new Android project with architecture and build infrastructure.',
        details:'Clean Architecture, MVI/MVVM, dependency injection (Koin), modularization, Coroutines, Flow, navigation, build variants, environments and basic testing setup.'
    },
    ru: {
        title:'Создание основы Android-проекта',
        description:'Подготовка нового Android-проекта с архитектурой и инфраструктурой сборки.',
        details:'Clean Architecture, MVI/MVVM, DI (Koin), модульность, Coroutines, Flow, навигация, варианты сборок, окружения и базовая настройка тестирования.'
    }
},
{
    icon: '⚙️',
    en: {
        title:'Gradle & Build Configuration',
        description:'Gradle setup, build variants and Google/Huawei service support.',
        details:'Product Flavors, Build Types, GMS/HMS configurations, DEV/QA/STAGING/PROD environments, dependencies, signing and build troubleshooting.'
    },
    ru: {
        title:'Настройка Gradle и сборок',
        description:'Настройка Gradle, вариантов сборки и сервисов Google/Huawei.',
        details:'Product Flavors, Build Types, GMS/HMS, окружения DEV/QA/STAGING/PROD, зависимости, подпись приложения и устранение проблем сборки.'
    }
},
{
    icon: '🛡️',
    en: {
        title:'Android Application Security',
        description:'Security mechanisms for apps, sensitive screens and user data.',
        details:'Remote-access risk detection (including AnyDesk-like tools), screen capture restrictions, active-call detection, Play Integrity, root/tampering checks, Android Keystore and local data encryption. Detection is subject to Android platform limitations.'
    },
    ru: {
        title:'Безопасность Android-приложений',
        description:'Защита приложения, чувствительных экранов и пользовательских данных.',
        details:'Выявление рисков удалённого доступа (включая AnyDesk и аналоги), ограничения записи экрана, обнаружение активных звонков, Play Integrity, Root и проверка модификаций, Android Keystore и шифрование данных. Возможности обнаружения ограничены платформой Android.'
    }
},
{
    icon: '📱',
    en: {
        title:'Jetpack Compose & Android UI',
        description:'New screens from Figma and XML-to-Compose migration.',
        details:'Jetpack Compose or XML screens, Material Design, reusable components, animations, adaptive layouts, UI state and navigation.'
    },
    ru: {
        title:'Jetpack Compose и Android UI',
        description:'Новые экраны по Figma и перенос XML на Jetpack Compose.',
        details:'Экраны на Compose или XML, Material Design, переиспользуемые компоненты, анимации, адаптивная вёрстка, состояния UI и навигация.'
    }
},
{
    icon: '🐞',
    en: {
        title:'Bug Fixing & Debugging',
        description:'Fixing crashes, ANRs, memory leaks and difficult Android bugs.',
        details:'Lifecycle, navigation, Coroutines/Flow, concurrency, memory, stability and Android Studio debugging.'
    },
    ru: {
        title:'Исправление ошибок',
        description:'Устранение крашей, ANR, утечек памяти и сложных ошибок.',
        details:'Жизненный цикл, навигация, Coroutines/Flow, многопоточность, память, стабильность и диагностика средствами Android Studio.'
    }
},
{
    icon: '🔌',
    en: {
        title:'SDK Integration & Configuration',
        description:'Integration and setup of third-party SDKs and Android services.',
        details:'Firebase, GMS/HMS, Sentry/Crashlytics, push notifications, CameraX, ML Kit, biometrics and third-party libraries.'
    },
    ru: {
        title:'Подключение и настройка SDK',
        description:'Интеграция сторонних SDK и сервисов Android.',
        details:'Firebase, GMS/HMS, Sentry/Crashlytics, push-уведомления, CameraX, ML Kit, биометрия и сторонние библиотеки.'
    }
},
{
    icon: '♻️',
    en: {
        title:'Android Code Refactoring',
        description:'Improving architecture and maintainability of existing Android code.',
        details:'Clean Architecture, modularization, MVI/MVVM, ViewModel simplification, dependency management, technical debt and testability.'
    },
    ru: {
        title:'Рефакторинг Android-кода',
        description:'Улучшение архитектуры и поддерживаемости существующего кода.',
        details:'Clean Architecture, модули, MVI/MVVM, упрощение ViewModel, зависимости, технический долг и тестируемость.'
    }
},
{
    icon: '🚀',
    en: {
        title:'Android App Publishing',
        description:'Preparing Android apps for release on Google Play.',
        details:'Release builds, AAB, signing, versioning, Google Play Console, internal/closed testing and submission support.'
    },
    ru: {
        title:'Публикация Android-приложений',
        description:'Подготовка приложений к релизу в Google Play.',
        details:'Release-сборки, AAB, подпись, версии, Google Play Console, внутреннее/закрытое тестирование и помощь с публикацией.'
    }
},
{
    icon: '🔍',
    en: {
        title:'Android Project Audit',
        description:'Technical review of architecture, dependencies and performance.',
        details:'Review of project structure, MVI/MVVM, Gradle, lifecycle, memory, security and technical debt, with prioritized findings and recommendations.'
    },
    ru: {
        title:'Аудит Android-проекта',
        description:'Анализ архитектуры, зависимостей и производительности.',
        details:'Анализ структуры проекта, MVI/MVVM, Gradle, жизненного цикла, памяти, безопасности и технического долга с приоритетными рекомендациями.'
    }
}
];
