# Find the Word

Schreib ein Programm, das große Dateien nach einem Wort durchsuchen kann. Als Parameter soll das Programm ein Wort und einen Dateipfad annehmen.

- Mach eine `index.js`
- Nutze `createReadStream` um `data.txt` aus dieser repo auszulesen.

- Das Programm soll ausgeben, wie oft das Wort in der Datei vorkommt
- Wenn kein Suchbegriff angegeben wird, soll das programm nach dem Wort 'localhost' suchen.

Beispiel, wenn keine Argumente angegeben wurden (`data.txt` wird durchsucht):

```bash
$ node index.js
Reading chunk 1
Reading chunk 2
Reading chunk 3
Reading chunk 4
Reading chunk 5
Reading chunk 6
Reading chunk 7
Reading chunk 8
End of data
Number of chunks: 8
Found 'localhost' 1 times
```

- Beispiel, wenn Wort angegeben wird:

```bash
$ node index.js function
Reading chunk 1
Reading chunk 2
Reading chunk 3
Reading chunk 4
Reading chunk 5
Reading chunk 6
Reading chunk 7
Reading chunk 8
End of data
Number of chunks: 8
Found 'function' 8 times
```

- Beispiel, wenn eine andere Datei als zweites Argument angegeben wird: 

```bash
node index.js individual ../node-PrintKeyboard/README.md 
Open big file chunk by chunk and count a word
 
Reading chunk 1
End of data
Number of chunks: 1
Found 'individual' 1 times
```

**Bonus**

- Für das Programm mit einem leeren String (`" "`) als erstes Argument aus. Es sollte ausgeben, wieviele Leerzeichen es in der Datei gibt.
