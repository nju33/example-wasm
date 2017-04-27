extern crate rand;
use rand::Rng;

macro_rules! rand_vec {
    ($p:expr) => (
        {
            let mut temp_vec = vec![0; $p];
            for p in &mut temp_vec {
                *p = rand::thread_rng().gen_range(1, 101);
            }
            temp_vec
        }
    )
}

fn main() {
    println!("{:?}", rand_vec!(10));
}
