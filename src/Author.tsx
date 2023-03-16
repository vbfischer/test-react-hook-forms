import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";
import { AuthorSchemaType } from "./form.types";

export interface AuthorProps {
  initialValue?: string;
}

export const Author = (props: AuthorProps) => {
  const { initialValue = "-1" } = props;

  const {
    register,
    formState: { errors },
  } = useFormContext<AuthorSchemaType>();

  const [selectState, setSelectState] = React.useState(initialValue);
  const [isEditing, setIsEditing] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectState(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing((curr) => !curr);
  };

  return (
    <>
      <VStack alignItems="stretch" gap={4}>
        <FormControl isInvalid={!!errors.author}>
          <FormLabel>Author</FormLabel>
          <HStack>
            <Select width="100%" value={selectState} onChange={handleChange}>
              <option value="-1">--Add New--</option>
              <option value="1">N.K. Jemisin</option>
              <option value="2">Frank Herbert</option>
              <option value="3">Robert Jordan</option>
            </Select>
            <Button variant="link" onClick={handleEditClick}>
              Edit
            </Button>
          </HStack>
        </FormControl>
        <VStack
          alignItems="stretch"
          style={{
            display: isEditing ? "block" : "none",
          }}
        >
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
              {errors.author?.bookName && errors.author?.bookName.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input {...register("author.description")} />
          </FormControl>
        </VStack>
      </VStack>
    </>
  );
};
