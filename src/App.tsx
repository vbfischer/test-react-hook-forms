import { Button, Container, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, VStack } from "@chakra-ui/react"
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { OtherForm } from "./OtherForm";

const schema = z.object({
  name: z.string({
    required_error: "Name is required"
  }).min(1, "Name is rrequired").min(4, "Minimum Name length should be 4"),
  subject: z.string({
    required_error: "Subject is required"
  }).min(1, "Subject is rrequired").min(4, "Minimum Subject length should be 4")
})

export type SchemaType = z.infer<typeof schema>;

function App() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SchemaType>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<SchemaType> = (form) => console.log('FORM', form);

  return (
    <Container maxW="container.sm" my={{ base: 0, md: 8 }}>
      <Flex alignItems="stretch" justifyContent="center">
        <Heading>Testing React Hook Form</Heading>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack mt={6} gap={4}>
          <OtherForm />
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Name</FormLabel>
            <Input id="name" placeholder="name" {
              ...register("name", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum Name length should be 4" }
              })
            } />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.subject}>
            <FormLabel>Subject</FormLabel>
            <Input id="subject" placeholder="subject" {
              ...register("subject", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum Subject length should be 4" }
              })
            } />
            <FormErrorMessage>
              {errors.subject && errors.subject.message}
            </FormErrorMessage>
          </FormControl>
          <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
            Submit
          </Button>
        </VStack>
      </form>
    </Container>
  )
}

export default App
