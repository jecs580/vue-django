<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>¿Estas seguro que deseas eliminar este libro?</h3>
                <p>Título: {{this.element.title}}</p>
                <p>Descripción: {{this.element.description}}</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <b-button v-on:click="deleteBook" variant="danger">Eliminar</b-button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
    data(){
        return {
            bookId: this.$route.params.Bookid,
            element:{
                title:'',
                description:''
            }
        }
    },
    methods: {
        async getBook(){
            const path = `http://127.0.0.1:8000/api/v1.0/books/${this.bookId}/`
            try {
                const res = await axios.get(path);
                this.element.title = res.data.title;
                this.element.description = res.data.description;
            } catch (error) {
                console.log(error);
            }
        },
        async deleteBook(){
             const path = `http://127.0.0.1:8000/api/v1.0/books/${this.bookId}/`
             try {
                await axios.delete(path);
                location.href='/books'
             } catch (error) {
                 console.log(error);
                 swal('Error','No es posible eliminar el libro','error')
             }
        }
    },
    created() {
        this.getBook();
    },
}
</script>