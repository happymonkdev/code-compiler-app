import { useState, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import { Box, HStack } from "@chakra-ui/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const [value, setValue] = useState();
  const [language, setLanguage] = useState("java");
  const editorRef = useRef();

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
    console.log("--->" + language);
  };

  return (
    <Box minH="100vh" bg="0f0a19" color="gray.500" px={6} py={8}>
      <HStack spacing={4}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            value={value}
            onChange={setValue}
            onMount={onMount}
          ></Editor>
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};

export default CodeEditor;
