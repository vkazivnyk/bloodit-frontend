import React from 'react';
import classes from './Home.module.scss';
import Post from '../../components/Post/Post';
import TopicList from '../../components/TopicList/TopicList';

interface HomeState {}
interface HomeProps {}

const title = 'Lorem ipsum dolor';

class Home extends React.Component<HomeProps, HomeState> {
    state: HomeState = {};
    render() {
        const array = [
            { topicName: 'Oleg', subscribers: 100 },
            { topicName: 'Olegg', subscribers: 90 },
        ];

        return (
            <div className={classes.container}>
                <TopicList topics={array} />
                <Post
                    title={title}
                    subBloodIt="#/Bloodit"
                    author="Vlad"
                    creatingDate="12 years ago">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia ut minima porro eos, autem voluptatum impedit a sed
                    dolorum non. Architecto, voluptatibus. Sapiente ut hic
                    repellat nihil minus, tempora sint. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Mollitia ut minima porro
                    eos, autem voluptatum impedit a sed dolorum non. Architecto,
                    voluptatibus. Sapiente ut hic repellat nihil minus, tempora
                    sint. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Mollitia ut minima porro eos, autem voluptatum impedit
                    a sed dolorum non. Architecto, voluptatibus. Sapiente ut hic
                    repellat nihil minus, tempora sint. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Minus possimus
                    exercitationem consectetur. Iusto reprehenderit tenetur,
                    exercitationem corrupti tempore, numquam a fuga recusandae
                    aliquam consectetur facilis molestiae animi voluptas
                    possimus delectus? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Non, iure ad facere quidem, deserunt sequi
                    ratione at praesentium eligendi ea ullam itaque omnis velit
                    delectus repudiandae autem laborum quam mollitia. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                    ut minima porro eos, autem voluptatum impedit a sed dolorum
                    non. Architecto, voluptatibus. Sapiente ut hic repellat
                    nihil minus, tempora sint. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Mollitia ut minima porro eos,
                    autem voluptatum impedit a sed dolorum non. Architecto,
                    voluptatibus. Sapiente ut hic repellat nihil minus, tempora
                    sint. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Mollitia ut minima porro eos, autem voluptatum impedit
                    a sed dolorum non. Architecto, voluptatibus. Sapiente ut hic
                    repellat nihil minus, tempora sint. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Minus possimus
                    exercitationem consectetur. Iusto reprehenderit tenetur,
                    exercitationem corrupti tempore, numquam a fuga recusandae
                    aliquam consectetur facilis molestiae animi voluptas
                    possimus delectus? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Non, iure ad facere quidem, deserunt sequi
                    ratione at praesentium eligendi ea ullam itaque omnis velit
                    delectus repudiandae autem laborum quam mollitia.
                </Post>
                <Post
                    title={title}
                    subBloodIt="#/Bloodit"
                    author="Vlad"
                    creatingDate="12 years ago">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia ut minima porro eos, autem voluptatum impedit a sed
                    dolorum non. Architecto, voluptatibus. Sapiente ut hic
                    repellat nihil minus, tempora sint. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Mollitia ut minima porro
                    eos, autem voluptatum impedit a sed dolorum non. Architecto,
                    voluptatibus. Sapiente ut hic repellat nihil minus, tempora
                    sint. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Mollitia ut minima porro eos, autem voluptatum impedit
                    a sed dolorum non. Architecto, voluptatibus. Sapiente ut hic
                    repellat nihil minus, tempora sint. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Minus possimus
                    exercitationem consectetur. Iusto reprehenderit tenetur,
                    exercitationem corrupti tempore, numquam a fuga recusandae
                    aliquam consectetur facilis molestiae animi voluptas
                    possimus delectus? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Non, iure ad facere quidem, deserunt sequi
                    ratione at praesentium eligendi ea ullam itaque omnis velit
                    delectus repudiandae autem laborum quam mollitia. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                    ut minima porro eos, autem voluptatum impedit a sed dolorum
                    non. Architecto, voluptatibus. Sapiente ut hic repellat
                    nihil minus, tempora sint. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Mollitia ut minima porro eos,
                    autem voluptatum impedit a sed dolorum non. Architecto,
                    voluptatibus. Sapiente ut hic repellat nihil minus, tempora
                    sint. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Mollitia ut minima porro eos, autem voluptatum impedit
                    a sed dolorum non. Architecto, voluptatibus. Sapiente ut hic
                    repellat nihil minus, tempora sint. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Minus possimus
                    exercitationem consectetur. Iusto reprehenderit tenetur,
                    exercitationem corrupti tempore, numquam a fuga recusandae
                    aliquam consectetur facilis molestiae animi voluptas
                    possimus delectus? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Non, iure ad facere quidem, deserunt sequi
                    ratione at praesentium eligendi ea ullam itaque omnis velit
                    delectus repudiandae autem laborum quam mollitia.
                </Post>
                <Post
                    title={title}
                    subBloodIt="#/Bloodit"
                    author="Vlad"
                    creatingDate="12 years ago">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia ut minima porro eos, autem voluptatum impedit a sed
                    dolorum non. Architecto, voluptatibus. Sapiente ut hic
                    repellat nihil minus, tempora sint. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Mollitia ut minima porro
                    eos, autem voluptatum impedit a sed dolorum non. Architecto,
                    voluptatibus. Sapiente ut hic repellat nihil minus, tempora
                    sint. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Mollitia ut minima porro eos, autem voluptatum impedit
                    a sed dolorum non. Architecto, voluptatibus. Sapiente ut hic
                    repellat nihil minus, tempora sint. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Minus possimus
                    exercitationem consectetur. Iusto reprehenderit tenetur,
                    exercitationem corrupti tempore, numquam a fuga recusandae
                    aliquam consectetur facilis molestiae animi voluptas
                    possimus delectus? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Non, iure ad facere quidem, deserunt sequi
                    ratione at praesentium eligendi ea ullam itaque omnis velit
                    delectus repudiandae autem laborum quam mollitia. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                    ut minima porro eos, autem voluptatum impedit a sed dolorum
                    non. Architecto, voluptatibus. Sapiente ut hic repellat
                    nihil minus, tempora sint. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Mollitia ut minima porro eos,
                    autem voluptatum impedit a sed dolorum non. Architecto,
                    voluptatibus. Sapiente ut hic repellat nihil minus, tempora
                    sint. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Mollitia ut minima porro eos, autem voluptatum impedit
                    a sed dolorum non. Architecto, voluptatibus. Sapiente ut hic
                    repellat nihil minus, tempora sint. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Minus possimus
                    exercitationem consectetur. Iusto reprehenderit tenetur,
                    exercitationem corrupti tempore, numquam a fuga recusandae
                    aliquam consectetur facilis molestiae animi voluptas
                    possimus delectus? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Non, iure ad facere quidem, deserunt sequi
                    ratione at praesentium eligendi ea ullam itaque omnis velit
                    delectus repudiandae autem laborum quam mollitia.
                </Post>
                <Post
                    title={title}
                    subBloodIt="#/Bloodit"
                    author="Vlad"
                    creatingDate="12 years ago">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia ut minima porro eos, autem voluptatum impedit a sed
                    dolorum non. Architecto, voluptatibus. Sapiente ut hic
                    repellat nihil minus, tempora sint. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Mollitia ut minima porro
                    eos, autem voluptatum impedit a sed dolorum non. Architecto,
                    voluptatibus. Sapiente ut hic repellat nihil minus, tempora
                    sint. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Mollitia ut minima porro eos, autem voluptatum impedit
                    a sed dolorum non. Architecto, voluptatibus. Sapiente ut hic
                    repellat nihil minus, tempora sint. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Minus possimus
                    exercitationem consectetur. Iusto reprehenderit tenetur,
                    exercitationem corrupti tempore, numquam a fuga recusandae
                    aliquam consectetur facilis molestiae animi voluptas
                    possimus delectus? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Non, iure ad facere quidem, deserunt sequi
                    ratione at praesentium eligendi ea ullam itaque omnis velit
                    delectus repudiandae autem laborum quam mollitia. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                    ut minima porro eos, autem voluptatum impedit a sed dolorum
                    non. Architecto, voluptatibus. Sapiente ut hic repellat
                    nihil minus, tempora sint. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Mollitia ut minima porro eos,
                    autem voluptatum impedit a sed dolorum non. Architecto,
                    voluptatibus. Sapiente ut hic repellat nihil minus, tempora
                    sint. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Mollitia ut minima porro eos, autem voluptatum impedit
                    a sed dolorum non. Architecto, voluptatibus. Sapiente ut hic
                    repellat nihil minus, tempora sint. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Minus possimus
                    exercitationem consectetur. Iusto reprehenderit tenetur,
                    exercitationem corrupti tempore, numquam a fuga recusandae
                    aliquam consectetur facilis molestiae animi voluptas
                    possimus delectus? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Non, iure ad facere quidem, deserunt sequi
                    ratione at praesentium eligendi ea ullam itaque omnis velit
                    delectus repudiandae autem laborum quam mollitia.
                </Post>
            </div>
        );
    }
}

export default Home;
