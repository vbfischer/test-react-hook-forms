import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { schema, SchemaType } from "./form.types";

export const ControlForm = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<SchemaType> = (props) =>
    console.log("PROPS", props);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack mt={6} gap={4} alignItems="stretch">
        <FormControl isInvalid={!!errors.name}>
          <FormLabel>Name</FormLabel>
          <Input {...register("name")} />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.subject}>
          <FormLabel>Subject</FormLabel>
          <Input {...register("subject")} />
          <FormErrorMessage>
            {errors.subject && errors.subject.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.author?.authorName}>
          <FormLabel>Author Name</FormLabel>
          <Input {...register("author.authorName")} />
          <FormErrorMessage>
            {errors.author?.authorName && errors.author?.authorName.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.author?.bookName}>
          <FormLabel>Book Name</FormLabel>
          <Input {...register("author.bookName")} />
          <FormErrorMessage>
            {errors.author?.bookName && errors.author.bookName.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input {...register("author.description")} />
        </FormControl>
        <Button isLoading={isSubmitting} type="submit">
          Submit
        </Button>
      </VStack>
    </form>
  );
};
