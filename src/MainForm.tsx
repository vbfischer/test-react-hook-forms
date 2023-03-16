import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Author } from "./Author";
import { SchemaType, schema } from "./form.types";

export const MainForm = () => {
  const methods = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<SchemaType> = (form) =>
    console.log("FORM", form);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack mt={6} gap={4} alignItems="stretch">
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Name</FormLabel>
            <Input
              id="name"
              placeholder="name"
              {...register("name", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum Name length should be 4",
                },
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.subject}>
            <FormLabel>Subject</FormLabel>
            <Input
              id="subject"
              placeholder="subject"
              {...register("subject", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum Subject length should be 4",
                },
              })}
            />
            <FormErrorMessage>
              {errors.subject && errors.subject.message}
            </FormErrorMessage>
          </FormControl>
          <Author />
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </VStack>
      </form>
    </FormProvider>
  );
};
