import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight, ScrollView } from 'react-native';
const Cita = ({ item, eliminarPaciente }) => {
    const dialogoEliminar = id => {
        console.log('Eliminando....', id);
        eliminarPaciente(id);
    }
    return (
<TouchableHighlight>
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Usuario:  </Text>
                <Text style={styles.texto}>{item.usuario}</Text>
            </View>
          
            <View>
                <Text style={styles.label}>Cantidad: </Text>
                <Text style={styles.texto}>{item.cantidad}</Text>
            </View>

            <View>
                <Text style={styles.label}>Sección: </Text>
                <Text style={styles.texto}>{item.seccion}</Text>
            </View>

            <View>
                <Text style={styles.label}>Fecha </Text>
                <Text style={styles.texto}>{item.fecha}</Text>
            </View>

            <View>
                <Text style={styles.label}>Hora: </Text>
                <Text style={styles.texto}>{new Date(item.hora).getHours() + ':' + new Date(item.hora).getMinutes() }</Text>
            </View>

            <View>
                <TouchableHighlight onPress={() => dialogoEliminar(item.id)}

                    style={styles.btnEliminar}>

                    <Text style={styles.textoEliminar}> Eliminar &times; </Text>
                </TouchableHighlight>
            </View>
        </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    texto: {
        fontSize: 18,
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10
    },
    textoEliminar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
export default Cita;