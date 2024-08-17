# Backstage OpenAPI Petstore

<!--toc:start-->

- [Project Structure](#project-structure)
  - [Generated Files](#generated-files)
  - [Example Implementation](#example-implementation)
- [Usage](#usage)
  - [Generating Files](#generating-files)
- [Learn More](#learn-more)
<!--toc:end-->

This repository provides an example of the generated files and setup when using the `@backstage/repo-tools` package to create a typed Express router and an API client with types for Backstage plugins. It uses the popular Petstore OpenAPI schema from [Swagger Editor](https://editor.swagger.io/) as the example schema.

## Project Structure

### Generated Files

The repository contains generated files based on the Petstore OpenAPI schema. These files are automatically generated using `@backstage/repo-tools` package and include:

- **API Client & Models:**

  - Located in: `/plugins/petstore-common/src/generated/apis` and `/plugins/petstore-common/src/generated/models`
  - These files contain the TypeScript types and API client code corresponding to the Petstore schema.

- **Typed Express Router:**
  - Located in: `/plugins/petstore-backend/src/generated/openapi.generated.ts`
  - This file includes the generated Express router based on the OpenAPI schema.

### Example Implementation

- **Express Router Implementation:**
  - Located in: `/backend/src/service/router.ts`
  - This file provides an example of how to integrate the generated typed Express router

## Usage

### Generating Files

To regenerate the files based on a new or updated OpenAPI schema:

1. **Ensure Java is Available:**

   - A Java binary must be available on your `PATH`. This is required for the code generation process.

2. **Run the Generation Command:**

   - From the root of the repository, run:
     ```bash
     yarn openapi-generate
     ```
   - This will regenerate the API client, types, and typed Express router files.

3. **Schema Location:**
   - The OpenAPI schema file used for generation is located at:
     `/plugins/petstore-backend/src/schema/openapi.yaml`

## Learn More

For more information on using OpenAPI schemas with Backstage, refer to the following resources:

- [Getting started with OpenAPI in your Backstage plugins](https://backstage.io/docs/openapi/01-getting-started)
- [Generate a client from your OpenAPI spec](https://backstage.io/docs/openapi/generate-client)
- [Validate your OpenAPI spec against test data](https://backstage.io/docs/openapi/test-case-validation)
