"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);

    //conf de CORS
    app.enableCors({
      origin: "http://localhost:5173", // Asegúrate de incluir el puerto correcto para tu front-end
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      allowedHeaders: "Content-Type, Accept",
      credentials: true,
    });

    const config = new swagger_1.DocumentBuilder()
        .setTitle('TFM Mock API')
        .setDescription('API mockeada para la documentación de proyecto TFM')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map