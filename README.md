# tm-splash-screen

Web component splash screen to manage login and waiting for dependencies.

## Installation
```bash
npm --save install @wonkytech/tm-splash-screen
```

## Usage
```html
<head>
    <style>
        html {
            --tm-splash-screen-background: lightgray; 
            --tm-splash-screen-color: black; 
        }
    </style>
    <script type="module">
        import 'tm-splash-screen';
    </script>
</head>
<body>
    <tm-splash-screen 
        heading="My App" 
        subheading="Please login" 
        login></tm-splash-screen>
</body>
```
