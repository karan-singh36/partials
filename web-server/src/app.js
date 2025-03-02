const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../template/view')
const partialsPath = path.join(__dirname, '../template/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        name: 'karan singh'})})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'karan singh'})})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'karan singh'})})

app.get('/feedback', (req, res) => {
    res.render('feedback', {
        title: 'Feedback Page',
        name: 'karan singh'})})

app.get('/services', (req, res) => {
    res.render('services', {
        title: 'Services Page',
        name: 'karan singh'})})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'my name',
        errorMessage: 'Page not found'})})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')})









