import { Button, FormControl, FormLabel, HStack, Input, Select, VStack } from "@chakra-ui/react";
import React from "react";

export interface OtherFormProps {
  initialValue?: string;
}

export const OtherForm = (props: OtherFormProps) => {
  const { initialValue = "-1" } = props;

  const [selectState, setSelectState] = React.useState(initialValue);
  const [isEditing, setIsEditing] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectState(e.target.value);
  }

  const handleEditClick = () => {
    setIsEditing(curr => !curr)
  }
  return (
    <>
      <VStack flex={1}>
        <HStack flex={1}>
          <Select flex={1} width="100%" value={selectState} onChange={handleChange}>
            <option value="-1">--Add New--</option>
            <option value="1">Star</option>
            <option value="2">Yellow</option>
            <option value="3">Alpha</option>
          </Select>
          <Button variant="link" onClick={handleEditClick}>Edit</Button>
        </HStack>
        {isEditing && (
          <>
            <FormControl>
              <FormLabel>Code Word</FormLabel>
              <Input placeholder="Code Word" />

            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input placeholder="description" />
            </FormControl>
          </>
        )}
      </VStack>
    </>
  )
}
