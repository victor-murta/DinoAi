import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
    const participantes = ['Joao'];
    //const participantes = [];

    function handleParticipantAdd() {
        if (participantes.includes("Rodrigo")) {
            return Alert.alert("Participante existente", "Este participante já está na lista ");
        }
        participantes.push("Ana");
        console.log(participantes);
        

    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remover participante ${name} ?`, [
            {
               text: 'Sim',
                onPress: () => Alert.alert('Usuário deletado!')
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);

        // console.log(`Removido: ${name}`);

    }
    //ScrollView :  vai renderizar apenas os objetos mostrados ( ele nao renderiza tudo de uma vez)

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Lista de participantes</Text>
            <Text style={styles.eventDate} >8 de Setembro de 2022</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                // keyboardType="numeric"
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText} >+</Text>
                </TouchableOpacity>
            </View>

            {/* <ScrollView showsVerticalScrollIndicator={false} > */}
            
            <FlatList
                data={participantes}
                keyExtractor={item => item}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmpty}>
                        Ningém chegou no evento? Adicione os participantes na lista
                    </Text>
                )}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)} />
                )}

            />
            {/* {
                    participantes.map(participant => (
                        <Participant
                            key={participant}
                            name={participant}
                            onRemove={() => handleParticipantRemove("Rodrigo")} />
                    )
                } */}


        </View>

    )
}